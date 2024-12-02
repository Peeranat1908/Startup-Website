import Logo from "/Users/peeranatphaophom/Desktop/next-js-project/my-app/public/img/kuStartup Logo.png"
export default function Main() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4">
            <div>
                <img src="/img/kuStartup Logo.png" alt="Logo" className="w-96" />
            </div>
            <div className="mt-4">
                <button className="btn btn-accent w-96">เข้าร่วมชมรม</button>
            </div>
        </div>


    )
}