import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "../Shared/Container";
import { GoHomeFill } from "react-icons/go";
import { FaUsers } from "react-icons/fa6";
import { MdPayments, MdClose } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store/Features/user/userSlice";
const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLink = (
    <>
      <li>
        <NavLink
          to="/admin/dashboard/overview"
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
        <NavLink
          to="/admin/dashboard/alluser"
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
          <FaUsers /> Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/dashboard/subscription"
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
          <MdPayments /> Subscription
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admin/dashboard/alltemplate"
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
          <HiTemplate /> All Templates
        </NavLink>
      </li>
    </>
  );

  const dispatch = useDispatch();
  const limit = 10; // Define the same limit

  useEffect(() => {
    // Fetch users when the dashboard loads (this will update totalUsers in the store)
    dispatch(fetchUsers({ page: 1, limit })); // Fetch first page
  }, [dispatch, limit]);

  const handleOpen = () => setIsOpen((prev) => !isOpen);
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-[290px]  bg-white lg:h-screen lg:border-r-2 lg:border-r-[#f0f0f0] relative">
        <button
          onClick={handleOpen}
          className="text-xl font-bold lg:hidden flex mt-5 px-3"
        >
          {isOpen ? <MdClose /> : <SlMenu />}
        </button>
        <nav className=" flex justify-center lg:mt-20 ">
          <ul className="font-semibold text-lg lg:flex flex-col gap-5 hidden md:text-base">
            {navLink}
          </ul>
          {isOpen && (
            <ul className="font-semibold text-lg flex flex-col gap-5 absolute bg-white w-full px-4 mt-5">
              {navLink}
            </ul>
          )}
        </nav>
      </div>
      <div className="bg-[#F5F6FA] mt-5 lg:mt-0 pt-5  px-3 min-h-screen flex-1">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default AdminLayout;

// 4rgba(253, 116, 155, 1)rgba(40, 26, 200, 1)
