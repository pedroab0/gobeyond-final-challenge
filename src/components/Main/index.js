import React, { useState, useEffect } from "react";
import * as S from "./index.style";
import Button from "./../Button/";

export default function Main() {
    const [apiData, setApiData] = useState([]);
    const [slider, setSlider] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        try {
            fetch(
                "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4"
            )
                .then((data) => {
                    return data.json();
                })
                .then((data) => {
                    setApiData(data);
                    setSlider(data[0].url);
                    setTitle(data[0].title);
                });
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <S.Container>
            <Button title={title} />
            <S.Slider>
                {apiData.map((photo, i) => {
                    return (
                        <S.Thumbnail
                            src={photo.thumbnailUrl}
                            onClick={() =>
                                setSlider(
                                    photo.url.replace("150", "122x72"),
                                    setTitle(photo.title)
                                )
                            }
                            active={slider === photo.url ? true : false}
                            key={photo.id}
                            alt="Image Thumbnail"
                        />
                    );
                })}
            </S.Slider>
            <S.Slide
                src={slider.replace("600", "1130x670")}
                alt="Image sample"
            />
        </S.Container>
    );
}
