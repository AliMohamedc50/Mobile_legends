/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch , useSelector} from "react-redux";
import { searchHero, searchHero_role, getHero } from "../Store/herosSlice";
import { Link } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const test = (ele) => {
    dispatch(searchHero(ele));
    dispatch(searchHero_role(ele));
  };

    const { search_Hero } = useSelector((state) => state.heros);


    const search_Hero_map =
      search_Hero.length > 0
        ? search_Hero.map((ele) => (
            <Link to={"/hero"}>
              <ul>
                <li
                  className="flex p-1 border-b border-black cursor-pointer"
                  onClick={() => dispatch(getHero(ele))}
                >
                  <img className="w-12" src={ele.image} alt="" />
                  <div className="ml-2">
                    <h3 className="text-xl text-teal-200">
                      {ele.name} <span>({ele.role}) </span>
                    </h3>
                    <span className="text-slate-300">{ele.lane_recc}</span>{" "}
                    <br />
                    <span className="text-slate-300">{ele.specialty}</span>
                  </div>
                </li>
              </ul>
            </Link>
          ))
        : null;


  return (
    <div className="flex justify-between items-center text-white navbar">
      <div className="flex justify-between items-center">
        <div className="logo w-36">
          <img
            className="w-full"
            src="./src/assets/other_photos/logo.jfif"
            alt=""
          />
        </div>
        <span className="mx-2 w-1 h-10 bg-slate-800 rounded-full "></span>
      </div>
      <div className="search">
        <span className="material-symbols-outlined text-slate-300">search</span>
        <input
          onChange={(e) => {
            test(e.target.value);
          }}
          type="text"
          className="w-full"
        />
        {search_Hero.length > 0 ? (
          <div className="search_heros">{search_Hero_map}</div>
        ) : null}
      </div>
      {/* <div className="buttons">
        <button className="btn mx-5">Log in</button>
        <button className="btn">Sign Up</button>
      </div> */}
    </div>
  );
}

export default Header
