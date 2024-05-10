import logo from '@images/logo.png';

export default function Welcome({title, subTitle}) {
    return (<>
        <div className="text-center pt-10">
            <h1 className="text-3xl font-extrabold text-slate-200">
                {title}
            </h1>
            <h4 className="text-xl pt-3">
                {subTitle}
            </h4>
        </div>
        <div className="flex justify-center items-center pt-12">
            <img 
                className="object-fill h-96"
                src={logo} alt="" />
        </div>
    </>);
};