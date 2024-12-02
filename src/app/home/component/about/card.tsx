export default function Card() {
    return (
        <div className="mt-10 flex flex-col items-center">
            {/* หัวข้อ */}
            <h1 className="text-3xl font-bold mb-8 text-center">กิจกรรม</h1>

            <div className="card-row">
                {/* row-1 */}
                <div className="flex justify-center">
                    {/* การ์ด1 */}
                    <div className="card bg-base-200 w-96 h-72 shadow-xl">
                        <figure>
                            <img
                                src="./img/Upskill Leadership Icon.png"
                                alt="Upskill"
                                className="rounded-t-lg w-24 mt-7"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">StartUp Upskill</h2>
                            <p className="text-center mt-2">อบรมสมาชิกในชมรมเกี่ยวกับความรู้ด้านการทำStartup</p>
                        </div>
                    </div>

                    {/* การ์ด2 */}
                    <div className="card bg-base-200 min-w-96 h-72 shadow-xl ml-14">
                        <figure>
                            <img
                                src="./img/Camp Icon.png"
                                alt="Shoes"
                                className="rounded-t-lg w-24 mt-7"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Startup Boothcamp</h2>
                            <p className="text-center mt-2">จัดค่ายสำหรับการเป็นผู้ประกอบการ</p>
                        </div>
                    </div>
                </div>

                {/* row-2 */}
                <div className="flex justify-center mt-7">
                    {/* การ์ด */}
                    <div className="card bg-base-200 w-96 shadow-xl min-w-100 h-72">
                        <figure>
                            <img
                                src="./img/Talk Icon.png"
                                alt="Shoes"
                                className="rounded-t-lg w-24 mt-7"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Talk Daily</h2>
                            <p className="text-center mt-2">เสาวนาทางวิชาการ ในหัวข้อด้านการสร้างธุรกิจ</p>
                        </div>
                    </div>

                    {/* การ์ด */}
                    <div className="card bg-base-200 w-96 shadow-xl ml-14">
                        <figure>
                            <img
                                src="./img/Hackathon Icon.png"
                                alt="Shoes"
                                className="rounded-t-lg w-24 mt-7"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Ku Hackathon</h2>
                            <p className="text-center mt-2">ระดมความคิดในการแก้ปัญหาด้วยเทคโนโลยีและความรู้ด้านการสร้างธุรกิจ</p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
