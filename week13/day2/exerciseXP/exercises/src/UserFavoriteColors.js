import React from "react";

const UserFavoriteColors = (props) => {
    const color =
        props.colors.map(i => {
            return (
                <>
                    <li>{i}</li>
                </>
            );
        });
    return (
        <ul>{color}</ul>
    )
};

export default UserFavoriteColors
