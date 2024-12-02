export default function Li() {

    return (
        <div className="flex flex-col items-center min-h-screen bg-white">
            <img src="/img/kuStartup Logo.png" alt="Logo" className="w-96 mb-8" />
            <div className="flex flex-col gap-4">
                <label className="input input-bordered flex items-center gap-2 bg-slate-200">
                    <input 
                        type="text" 
                        className="grow text-black" 
                        placeholder="Email"
                    />
                </label>
                {/* Add similar labels for email, username, and password */}

                <label className="input input-bordered flex items-center gap-2 bg-slate-200">
                    <input 
                        type="password" 
                        className="grow text-black" 
                        placeholder="Password"
                    />
                </label>
                <button className="btn btn-success">Login</button>
                <button className="btn btn-outline btn-ghost btn-error">Register</button>
            </div>
        </div>
    );
}
