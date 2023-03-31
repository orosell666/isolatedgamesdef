import React from "react";
import "../styles/index.css";
import Avatar from "../images/batman_90804.png"

const Team=()=>{
    return(
        <div className="textColor1  top-0 text-center teambg">
            <h1 className=" mb-5 pt-5 ">TEAM</h1>
            <div className="container col-10 ">
                <div className="row align-items-start">
                    <div className="col">
                        
                        <div className="card  rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Francesc Romero</ins></h4>
                                        <p className="card-text  text-center">CEO</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Iago Silva</ins></h4>
                                        <p className="card-text  text-center">Creative Director</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card  rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Daniel Malvido</ins></h4>
                                        <p className="card-text  text-center">Pixel Artist</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row align-items-center mt-4">
                    <div className="col">
                        <div className="card  rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Daniel Oliver</ins></h4>
                                        <p className="card-text  text-center">Pixel Artist</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card   rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Alberto Hernández</ins></h4>
                                        <p className="card-text  text-center">Pixel Artist</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card   rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Sergi Cugat</ins></h4>
                                        <p className="card-text  text-center">Programmer</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row align-items-end mt-4 pb-5">
                    <div className="col">
                        <div className="card   rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Gerard Pardis</ins></h4>
                                        <p className="card-text  text-center">Programmer</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card   rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Jose Donaire</ins></h4>
                                        <p className="card-text  text-center">Community Manager</p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card   rounded-3 w-100">
                            <div className="row g-0">
                                    <div className=" d-flex">
                                    <img src={Avatar} className="d-none d-sm-block col-sm-3  p-2" />
                                    <div className="card-body ">
                                    <h4 className="card-header border-0"><ins>Francesc Romero</ins></h4>
                                        <p className="card-text  text-center">Supreeme Master Paychecks </p>
                                        </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}
export default Team;