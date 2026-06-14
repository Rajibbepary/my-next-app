import Title from "@/components/Title";

const TutorialPage = async({params}) => {
    const {technologe, topic, page_on, subject,} = await params;
    //console.log(result)
    return (
        <div>
            <Title >{technologe} tutorilas</Title>
            <h1>{topic}</h1>
            <h2>{subject}</h2>
            <h2 className="text-red-500">Page: {page_on}</h2>
        </div>
    );
};

export default TutorialPage;