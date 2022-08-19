import React from "react";
import categories from "./CategoriesList";
import CategoriesItem from "./CategoriesItem"

const CategoriesSideBar = () => {
    return (
        <div
            data-test="component-CategoriesSideBar"
            className="catSideBarWrapper"
        >
            <div className="catSideBarMargin">
                <div className="catSideBarContentDiv">
                    <h3>Categories</h3>
                    <div className="catSideBarContentBorder">
                        {!categories
                            ? null
                            : categories.map((tag, idx) => (
                                  <CategoriesItem tag={tag} key={idx} />
                              ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSideBar;
