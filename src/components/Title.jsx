

const Title = ({children}) => {
    return (
        <div className='bg-linear-120 text-center px-4 py-8 my-4 to-blue-300 from-blue-600 '>
            <h1 className='text-4xl text-black font-bold'>{children}</h1>
        </div>
    );
}; 

export default Title;