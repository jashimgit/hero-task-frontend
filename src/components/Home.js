import React from "react";

import { Link } from "react-router-dom";
import Layout from './layout/Layout';
export default function Home() {
    return (
        <Layout>
            
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Welcome to Hero Rider</h4>
                    </div>
                    <div className="col-md-6">
                        <Link to="/rider-signup">
                            <button className="btn btn-primary me-auto">
                                Sign in as Rider
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/learner" >
                            <button className="btn btn-info me-auto">
                                Sign in as Learner
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
