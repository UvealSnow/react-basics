import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (
    <>
      <h1>[Company website]</h1>
      <nav>

        <Link to="about">About</Link>
        <Link to="about">Events</Link>
        <Link to="about">Contact</Link>
      </nav>
    </>
  );
};

export function About() {
  return (
    <>
      <h1>[About]</h1>
      <Outlet />
    </>
  );
};

export function Services() {
  return (
    <div>
      <h1>[Services]</h1>
    </div>
  );
};

export function CompanyHistory() {
  return (
    <div>
      <h1>[Company History]</h1>
    </div>
  );
};

export function Location() {
  return (
    <div>
      <h1>[Location]</h1>
    </div>
  );
};

export function Events() {
  return (
    <>
      <h1>[Events]</h1>
    </>
  );
};

export function Contact() {
  return (
    <>
      <h1>[Contact]</h1>
    </>
  );
};

export function NotFound() {
  const location = useLocation();
  return (
    <>
      <h1>[404 - Not Found!]</h1>
      <p>Resource not found @{location.pathname}</p>
    </>
  );
};
