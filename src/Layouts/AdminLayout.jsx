import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../Shared/Container";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import { MdPayments, MdClose } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = (
    <>
      <li>
        <NavLink
          className="flex items-center gap-2 font-montserrat hover:text-primary transition-colors text-slate-600"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              color: isActive ? "white" : "",
              background: isActive ? "#2CACD5" : "",
              borderRadius: isActive ? "50px" : "",
              padding: isActive ? "6px 15px" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <GoHomeFill /> Overview
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center gap-2 font-montserrat hover:text-primary transition-colors text-slate-600">
          <FaUsers /> Users
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center gap-2 font-montserrat hover:text-primary transition-colors text-slate-600">
          <MdPayments /> Subscription
        </NavLink>
      </li>
      <li>
        <NavLink className="flex items-center gap-2 font-montserrat hover:text-primary transition-colors text-slate-600">
          <HiTemplate /> All Templates
        </NavLink>
      </li>
    </>
  );

  const handleOpen = () => setIsOpen((prev) => !isOpen);
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="max-w-[290px] w-full bg-white lg:h-screen lg:border-r-2 lg:border-r-[#f0f0f0] relative">
        <button
          onClick={handleOpen}
          className="text-xl font-bold lg:hidden flex mt-5"
        >
          {isOpen ? <MdClose /> : <SlMenu />}
        </button>
        <nav className=" flex justify-center lg:mt-20 ">
          <ul className="font-semibold text-lg lg:flex flex-col gap-5 hidden">
            {navLink}
          </ul>
          {isOpen && (
            <ul className="font-semibold text-lg flex flex-col gap-5 absolute bg-white w-full px-4 mt-5">
              {navLink}
            </ul>
          )}
        </nav>
      </div>
      <div className="bg-[#F5F6FA]  g:mt-24 mt-5 lg:mt-0 pt-5  flex-1 px-3">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default AdminLayout;

// 4rgba(253, 116, 155, 1)rgba(40, 26, 200, 1)
