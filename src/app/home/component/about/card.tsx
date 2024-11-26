export default function Card() {
    return (
        <div className="mt-10 flex flex-col items-center">
            {/* หัวข้อ */}
            <h1 className="text-3xl font-bold mb-8 text-center">กิจกรรม</h1>

            <div className="card-row">
                {/* row-1 */}
                <div className="flex justify-center">
                    {/* การ์ด1 */}
                    <div className="card bg-base-200 w-100 h-72 shadow-xl">
                        <figure>
                            <img
                                src="./img/Upskill Leadership Icon.png"
                                alt="Upskill"
                                className="rounded-t-lg w-24 mt-7"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">StartUp Upskill</h2>
                            <p>อบรมสมาชิกในชมรมเกี่ยวกับความรู้ด้านการทำStartup</p>
                        </div>
                    </div>

                    {/* การ์ด2 */}
                    <div className="card bg-base-100 w-96 shadow-xl ml-14">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* row-2 */}
                <div className="flex justify-center">
                    {/* การ์ด */}
                    <div className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    {/* การ์ด */}
                    <div className="card bg-base-100 w-96 shadow-xl ml-14">
                        <figure>
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}
