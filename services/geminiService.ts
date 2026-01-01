
import { GoogleGenAI } from "@google/genai";

/**
 * Encapsulates image editing logic using Gemini 2.5 Flash Image model.
 */
export const editImage = async (base64Image: string, prompt: string): Promise<string | null> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image.split(',')[1], // Strip metadata prefix
              mimeType: 'image/jpeg',
            },
          },
          {
            text: `Please edit this food photo according to this instruction: ${prompt}. Return the edited image.`,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Error editing image with Gemini:", error);
    return null;
  }
};
