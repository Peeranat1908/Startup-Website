export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <img src="./img/kuStartup Logo.png" alt="" className="w-30 btn btn-ghost"/>
                    <div className="dropdown">
                        <div tabIndex= {0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex= {0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>หน้าแรก</a></li>
                            <li><a>สมัครสมาชิก</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">KU Startup</a>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>หน้าแรก</a></li>
                        <li><a >สมัครสมาชิก</a></li>
                        <li>
                            <details>
                                <summary>ข่าวสาร</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>ข้อมูลองค์กร</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>ติดต่อเรา</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-accent">เข้าสู่ระบบ</a>
                </div>
            </div>
        </div>
    );
}