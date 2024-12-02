import Card from "./card";
export default function About() {
    return (
        <div className="flex flex-col justify-center min-h-screen">
            <div className="card mt-8 text-center max-w-screen-md bg-base-200 p-10 shadow-2xl">
                <h1 className="text-3xl font-bold text-foreground mt-5">
                    KU Startup คืออะไร ?
                </h1>
                <p className="mt-6 text-lg text-white leading-relaxed">
                    KU Startup คือชมรมในมหาวิทยาลัยเกษตรศาสตร์ที่มุ่งเน้นการส่งเสริมและพัฒนาศักยภาพของนักศึกษาที่มีความสนใจในด้านการสร้างธุรกิจ (Startup) และนวัตกรรมใหม่ๆ
                    โดยมีกิจกรรมหลากหลายที่ช่วยสนับสนุนให้สมาชิกสามารถนำไอเดียที่สร้างสรรค์ไปสู่การพัฒนาผลิตภัณฑ์หรือบริการที่เป็นรูปธรรม
                </p>
            </div>

            <div>
                <Card/>
            </div>
            
        </div>
    )
}