
import { ShopInfo, MenuCategory, MenuItem } from './types';

export const SHOP_INFO: ShopInfo = {
  name: "Mowan 港式串烤雞蛋仔 - 旺仔店",
  line: "@412nugdq",
  phone: "06-2560053",
  address: "台南市安南區安和路一段341-1號",
  note: "餐點均採現點現做，每份約三到五分鐘。為免久候可加 LINE 線上點餐或來電預訂！！"
};

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Mowan 港式雞蛋仔",
    items: [
      { name: "經典原味", price: 60 },
      { name: "日式抹茶", price: 70 },
      { name: "香濃可可", price: 70 },
      { name: "黑眼豆豆", price: 70 },
      { name: "OREO 碎粒", price: 70 },
      { name: "藍莓乾", price: 75 },
      { name: "辣味起司", price: 75 },
      { name: "黑豆可可", price: 80 },
      { name: "碎粒花生", price: 70 },
      { name: "養生芝麻", price: 70 },
      { name: "岩烤海苔", price: 70 },
      { name: "香濃奶酥", price: 70 },
      { name: "葡萄乾", price: 70 },
      { name: "蜂蜜麻糬", price: 75 },
      { name: "煙燻起司", price: 75 },
      { name: "小肉豆", price: 80 },
      { name: "雙色起司", price: 70 },
      { name: "紫色藍莓", price: 70 },
      { name: "浪漫草莓", price: 70 },
      { name: "黑糖麻糬", price: 70 },
      { name: "原味麻糬", price: 70 },
      { name: "蔓越莓", price: 75 },
      { name: "松露起司", price: 75 },
      { name: "煙燻德腸", price: 80 }
    ]
  },
  {
    title: "Mowan 串烤雞蛋仔",
    items: [
      { name: "串烤原味", price: 45 },
      { name: "串烤抹茶", price: 45 },
      { name: "串烤可可", price: 45 },
      { name: "黑眼豆豆", price: 45 },
      { name: "OREO 餅乾", price: 45 },
      { name: "小熊餅乾", price: 45 },
      { name: "黑豆可可", price: 45 },
      { name: "隱藏版", price: 45 },
      { name: "雙色起司", price: 45 },
      { name: "煙燻起司", price: 45 },
      { name: "辣味起司", price: 45 },
      { name: "拉絲起司", price: 45 },
      { name: "黑糖麻糬", price: 45 },
      { name: "原味麻糬", price: 45 },
      { name: "蜂蜜麻糬", price: 45 },
      { name: "松露起司", price: 45 },
      { name: "碎粒花生", price: 45 },
      { name: "養生芝麻", price: 45 },
      { name: "岩烤海苔", price: 45 },
      { name: "煙燻德腸", price: 45 },
      { name: "小肉豆", price: 45 },
      { name: "葡萄乾", price: 45 },
      { name: "藍莓乾", price: 45 },
      { name: "蔓越莓乾", price: 45 }
    ]
  },
  {
    title: "Mowan Mini 雞蛋仔",
    items: [
      { name: "mini 原味", price: 30 },
      { name: "mini 抹茶", price: 30 },
      { name: "mini 可可", price: 30 },
      { name: "黑眼豆豆", price: 30 },
      { name: "OREO 餅乾", price: 30 },
      { name: "小熊餅乾", price: 30 },
      { name: "黑豆可可", price: 30 },
      { name: "隱藏版", price: 30 },
      { name: "雙色起司", price: 30 },
      { name: "煙燻起司", price: 30 },
      { name: "辣味起司", price: 30 },
      { name: "拉絲起司", price: 30 },
      { name: "黑糖麻糬", price: 30 },
      { name: "原味麻糬", price: 30 },
      { name: "蜂蜜麻糬", price: 30 },
      { name: "松露起司", price: 30 },
      { name: "碎粒花生", price: 30 },
      { name: "養生芝麻", price: 30 },
      { name: "岩烤海苔", price: 30 },
      { name: "煙燻德腸", price: 30 },
      { name: "小肉豆", price: 30 },
      { name: "葡萄乾", price: 30 },
      { name: "藍莓乾", price: 30 },
      { name: "蔓越莓乾", price: 30 }
    ]
  }
];

// Added missing MenuItem type import to fix error on line 102
export const DRINKS: MenuItem[] = [
  { name: "仙草甘茶", price: 50 },
  { name: "仙草鮮奶茶", price: 60 },
  { name: "金萱菁茶", price: 50 },
  { name: "蜜桃紅茶", price: 50 }
];

// Added missing MenuItem type import to fix error on line 109
export const SPECIALS: MenuItem[] = [
  { name: "爆蛋腸 (雞蛋與德腸蹦出新滋味)", price: 45 }
];
