export const products = [
    {
        id: "P01",
        title: "Template สำหรับเริ่มต้นธุรกิจฉบับง่ายๆ",
        desc: "ในนี้จะมีพื้นที่ให้คุณจัดการกับข้อมูลของแบรนด์ ไม่ว่าจะเป็น CI หรือข้อมูลต่างๆที่คุณจะต้องใช้บ่อยมากในการเริ่มต้น ไปจนถึงการพัฒนาธุรกิจของคุณไปเรื่อยๆ ",
        price: 199,
        fullPrice: 299,
        img: "/store_img_1.svg",
        isComingSoon: true
    },
    {
        id: "P02",
        title: "10X YOUR LIFE NOW! [E-BOOK]",
        desc: "เปลี่ยนชีวิตคุณ พุ่งทะยานขึ้น 10 เท่าทันที! คัดเนื้อเน้นๆจากหนังสือเปลี่ยนชีวิต ที่การันตีมาแล้วว่าเปลี่ยนชีวิตได้จริง เหมาะกับคนที่ต้องการเปลี่ยนตัวเองเป็นคนใหม่ ไม่เอาแล้วชีวิตแบบเดิม",
        price: 499,
        fullPrice: 1000,
        img: "/product-02.jpg",
        isComingSoon: false,
        isRecommend: true
    }
];

export type TProduct = (typeof products)[number];
