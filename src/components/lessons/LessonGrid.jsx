import { useEffect, useState } from "react";
import { getLessons } from "../../firebase/lessons";

export default function LessonGrid() {

    let [lessons, setLessons] = useState([]);
    let [isloading, setIsloading] = useState(true);


    useEffect(() => {
        getLessons().then(lessons => {
            setLessons(lessons);
        }).catch(e => {
            console.error(e);
        });
        setIsloading(false);
    }, [])


    if (isloading) {
        return "Loading..."
    }

    return <>
        {lessons && lessons.map(lesson => <>
            <h2>
                {lesson.title} {lesson.id}
            </h2>
            {lesson.content.map(row => <p>
                {row}
            </p>)}
        </>
        )}
    </>;
}