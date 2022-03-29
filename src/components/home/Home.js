import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAdverts } from "../../store/actions";
import { Link } from "react-router-dom";
import {
  loadAdvertsSelector,
  uiSelector,
  loadTagsSelector,
  getUser,
} from "../../store/selectors";

//imports Bea
import Header from "../layout/header";
import { defaultFilters, filterAdverts } from "./filters";
import CheckboxGroup from "../common/Checkbox";
import storage from "../../utils/storage";
import Slider from "rc-slider";
import { loadTags } from "../../store/actions";
import FilterComp from "./FilterComponent";
import "../../index.css";
import { customtags } from "./provisional";
import CheckboxTags from "../common/Checkbox_Tags";
import StartChat from "../common/StartChat";
import AdvertCard from "../common/AdvertCard";
import ReactPaginate from "react-paginate";
import PaginationAdverts from "./PaginationAdverts";
import useFilter from "../hooks/useFilter";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

//TODO de Ivan a mi mismo: paginar con una librería y hacer llamada al api con query (skip y limit)
//TODO: hacer que muestre la foto en el listado (¿tema de la ruta de estáticos en el back?)

function Home() {
  const filter = useFilter();
  const ads = useSelector(loadAdvertsSelector);
  const tags = useSelector(loadTagsSelector);
  const user = useSelector(getUser);


  const { isLoading, error } = useSelector(uiSelector);
  return (
    <div className="grid grid-cols-6 gap-3 p-3">
      <div className="grid grid-cols-6 lg:col-span-4 md:col-span-3 gap-3 col-span-full">
        <PaginationAdverts itemsPerPage={9} adverts={filter.value} />
      </div>
      <div className="lg:col-span-2 md:col-span-3 col-span-full">
        <div className="sticky top-0">
          {/* <FilterComp
            submit={filter.handleSubmit}
            change={filter.handleChange}
            value={filter.value}
            tag={ads}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
