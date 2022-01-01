import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    Hero Rider
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="/">
                                Link
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
