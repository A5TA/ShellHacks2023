import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error: any = useRouteError();
    console.error(error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-500">
      <h1 className="text-5xl text-white font-bold mb-4">Oops!</h1>
      <p className="text-lg text-white mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg text-white"><i>{error.statusText || error.message }</i></p>
    </div>
  )
}

export default ErrorPage