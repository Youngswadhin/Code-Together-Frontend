// import illustration from "@/assets/illustration.svg"
// import FormComponent from "@/components/forms/FormComponent"
// // import Footer from "@/components/common/Footer";

// function HomePage() {
//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center gap-16">
//             <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
//                 <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
//                     <img
//                         src={illustration}
//                         alt="Code Sync Illustration"
//                         className="mx-auto w-[250px] sm:w-[400px]"
//                     />
//                 </div>
//                 <div className="flex w-full items-center justify-center sm:w-1/2">
//                     <FormComponent />
//                 </div>
//             </div>
//             {/* <Footer /> */}
//         </div>
//     )
// }

// export default HomePage
import { useState } from "react"

import Footer from "@/components/common/Footer"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import FormComponent from "@/components/forms/FormComponent"


const LandingPage = () => {
    const [showForm, setShowForm] = useState(false)
  

  
  
    const codeString = `
const { createStore, bindActionCreators } = Redux;
const { Provider, connect } = ReactRedux;
class App extends React.Component {
  render() {
    return (
      <section className="friend zone">
        <h1 className="title">FriendShip</h1>
        <AddFriend addFriend={this.props.addFriend} />
        <Friends contacts={this.props.friends} />
      </section>
    );
  }
}
`

    return (
        <div className="flex min-h-screen flex-col items-center bg-black text-white">
          
            {/* Navbar */}
            <div className="flex w-full items-center justify-between p-6">
                <h1 className="text-2xl font-bold text-green-400">
                    Code Together
                </h1>
                <button
                    className="rounded-lg bg-green-400 px-6 py-3 text-black hover:bg-green-300"
                    onClick={() => setShowForm(true)}
                >
                    + Create Room ID
                </button>
                {showForm && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                        <div className=" rounded-lg bg-white/20 border p-6 shadow-lg ">
                        <FormComponent />

                            <button
                                className="absolute right-2 top-2 font-bold text-white"
                                onClick={() => setShowForm(false)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Hero Section */}
            <div className="mt-10 text-center">
                <h2 className="mb-4 text-lg text-gray-400">
                    The Top Coding Education Platform for Students
                </h2>
                <h1 className="mb-4 text-6xl font-bold">
                    Code{" "}
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Together
                    </span>
                </h1>
                <h1 className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent">
                    Code Here. Code Now.
                </h1>
            </div>

            {/* Code Editor Section */}
            <div className="relative mt-10 w-11/12 max-w-4xl rounded-xl border border-[#342b4b] bg-gray-900 pt-10">
                <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
                <div className="rounded-b-xl bg-[#090317] p-8 pb-0">
                    <div className=" flex items-center justify-between">
                        <h3 className="text-xl font-semibold">
                            JavaScript Graphics
                        </h3>
                        <div className="flex space-x-4">
                            <button className="rounded bg-green-400 px-4 py-1 text-black hover:bg-green-300">
                                Run
                            </button>
                            <button className="rounded bg-purple-500 px-4 py-1 hover:bg-purple-400">
                                Clear
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-8">
                        {/* Code Box */}
                        <div className="flex-1 overflow-auto rounded-lg">
                            <SyntaxHighlighter
                                language="javascript"
                                style={oneDark}
                                customStyle={{
                                    background: "transparent",
                                    fontSize: "0.875rem",
                                }}
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>

                        {/* 3D Blob/Globe */}
                        <div className="flex items-center justify-center md:mt-0">
                            <img
                                src="/sphere.gif"
                                alt="Sphere Animation"
                                className="h-64 w-64 rounded-full object-cover"
                                style={{
                                    WebkitMaskImage: "radial-gradient(circle, black, transparent)",
                                    maskImage: "radial-gradient(circle, black, transparent)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default LandingPage
