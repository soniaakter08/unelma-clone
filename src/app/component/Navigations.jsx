"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext";
import styles from "./Navigations.module.css";

const Navigations = ({ children }) => {
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <button onClick={() => handleNavigation("/")}>Home</button>
          <button onClick={() => handleNavigation("/about")}>About</button>
          <button onClick={() => handleNavigation("/services")}>Services</button>
          {user && <button onClick={() => handleNavigation("/admin")}>Admin zone</button>}
        </div>

        <div className={styles.authActions}>
          {user ? (
            <>
              <h1>Welcome, {user.email}</h1>
              <button className={styles.authButton} onClick={signOut}>Logout</button>
            </>
          ) : (
            <button className={styles.authButton} onClick={() => handleNavigation("/login")}>Login</button>
          )}
        </div>
      </div>

      {/* Page content */}
      <div className={styles.content}>{children}</div>

      <footer className={styles.footer}>© 2025 Your Company</footer>
    </div>
  );
};

export default Navigations;
