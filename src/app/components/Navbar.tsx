import {UserButton, SignInButton} from "@clerk/clerk-react";

export default function Navbar(props: {signedIn: boolean | undefined}) {
	const SignedIn = () => {

		return (
			<nav className=" flex p-5 justify-between">
				<div className="justify-self-start px-auto my-auto">LOGO</div>
				<div className="justify-self-end flex p-1">
					<form className="px-2">
						<label
							htmlFor="default-search"
							className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>
							Search
						</label>
						<div className="relative">
							<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
								<svg
									className="w-4 h-4 text-gray-100 dark:text-gray-100"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 20"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeLidth="2"
										d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
									/>
								</svg>
							</div>
							<input
								type="search"
								id="default-search"
								className="block w-full p-1 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-red-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search Mockups, Logos..."
								required
							></input>
						</div>
					</form>
					<UserButton
						afterSignOutUrl="/"
						showName={true}
						appearance={{
							elements: {userButtonOuterIdentifier: "text-white"},
						}}
					/>
				</div>
			</nav>
		);
	};
	const SignedOut = () => {
		return (
			<nav className="bg-cyan-800 flex items-center justify-between p-4">
				<div>
					<p>LOGO</p>
				</div>
				<div>
					<ul className="flex items-center justify-between space-x-4">
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
					</ul>
				</div>
				<div>
					<SignInButton mode="modal" redirectUrl="/">
						<button className="bg-cyan-400 hover:bg-gray-100 text-gray-800 font-semibold px-4 border border-gray-400 rounded shadow">
							Sign In
						</button>
					</SignInButton>
				</div>
			</nav>
		);
	};
	return <div>{props.signedIn ? <SignedIn /> : <SignedOut />}</div>;
}
