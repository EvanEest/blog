import Link from "next/link";

const Template = (props: any) => {
    return (
        <>
            <div className={"p-3"}>
                <div>IM ROOT TEMPLATE</div>
                <button className="bg-blue-500">
                    <Link href="/dashboard">Go Dashboard</Link>
                </button>
            </div>
            <div className="container m-3">
                {props.children}
            </div>
        </>

    )
        ;
};

export default Template;