
import React, { useState, useRef } from 'react';
import { editImage } from '../services/geminiService';

const ImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setEditedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    const result = await editImage(image, prompt);
    if (result) {
      setEditedImage(result);
    } else {
      alert("編輯失敗，請重試。");
    }
    setLoading(false);
  };

  const reset = () => {
    setImage(null);
    setEditedImage(null);
    setPrompt("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="bg-orange-50 p-6 rounded-xl border-2 border-yellow-200 shadow-inner my-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-orange-800">AI 雞蛋仔美照助手</h2>
        <p className="text-orange-600 text-sm">上傳照片，讓 AI 幫你的美食加分！</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {!image ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full h-64 border-2 border-dashed border-orange-300 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-white hover:bg-orange-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-orange-500 font-medium">點擊上傳美食照片</span>
            </div>
          ) : (
            <div className="relative w-full">
              <img src={editedImage || image} className="w-full h-auto rounded-lg shadow-md border border-orange-200" alt="Food preview" />
              <button 
                onClick={reset}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div>
            <label className="block text-sm font-bold text-orange-800 mb-1">編輯指令 (中文或英文)</label>
            <input 
              type="text" 
              placeholder="例如：加上復古濾鏡、讓背景變模糊、增加亮度" 
              className="w-full p-3 rounded-lg border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {['增加亮度', '暖色調濾鏡', '背景模糊', '復古風格'].map(hint => (
              <button 
                key={hint}
                onClick={() => setPrompt(hint)}
                className="text-xs bg-orange-200 text-orange-800 px-3 py-1 rounded-full hover:bg-orange-300 transition-colors"
                disabled={loading}
              >
                {hint}
              </button>
            ))}
          </div>

          <button 
            onClick={handleEdit}
            disabled={!image || !prompt || loading}
            className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all ${
              loading || !image || !prompt ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600 active:scale-95'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                AI 正在編輯中...
              </span>
            ) : "開始編輯"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
