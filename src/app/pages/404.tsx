
const Custom404Page = () => {
    return (<div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold">페이지를 준비중입니다.</h2>
                <p className="mt-2 text-red-500">400 Not Found</p>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded">
                    다시 시도
                </button>
            </div>
            );
}

export default Custom404Page;