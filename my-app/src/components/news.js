import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import screenshot from "../screenshot_7.jpg";
import screenshot2 from "../screenshot_2.jpg";
import screenshot3 from "../157.jpg";
;
const News = () => {
    return(
        <div className="textColor1 sectionStyle pt-5 mt-5" id="scrollspyHeading2" >
            <h1 className=" pt-5">NEWS</h1>
            <div className="container justify-content-start">
            <div className="card bg-dark mt-5">
                <div className="row g-0">
                 <div className="col-sm-12">
                <div className="card-body text-start">
                    <h2 className="card-title">New version for the game</h2>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <div className="row">
                <img src={screenshot} className="img-fluid col-sm-4 mt-2" />
               
                    <p className="card-text col-sm-8 text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn btn-dark col-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                       More...
                        </button></div></div>
                    
                </div></div>  
                
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen " id="">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New version for the game</h5>
                                <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                                
                            </div>
                            <div className="modal-body">
                                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum maximus erat eu malesuada. Ut et tincidunt tellus. Curabitur pharetra pharetra aliquam. Aenean odio arcu, semper ut magna ac, tincidunt sodales justo. Nullam et tristique lectus. Suspendisse metus velit, scelerisque vel turpis imperdiet, dapibus congue tortor. Sed vel felis id metus iaculis mollis. Nulla ornare tristique consequat. Pellentesque libero quam, mollis eget libero ac, facilisis sollicitudin augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum id nibh quis bibendum. Fusce quis ornare enim. Suspendisse eget massa mauris. Fusce quis dapibus nisi.

Nunc ac porttitor neque. Vestibulum blandit felis vel ex congue luctus. Quisque eu finibus dolor, id pharetra nunc. Cras ac dolor vulputate, elementum sapien eget, facilisis massa. In rhoncus vulputate urna vitae tempor. Donec ut varius velit. Sed ut finibus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pharetra posuere nibh, a posuere nibh malesuada ut. Vestibulum sit amet nibh id turpis placerat pharetra quis sed sapien. Sed sagittis purus quis purus vestibulum, in lobortis neque mattis. Ut ornare magna leo, et tempor dui porta vitae. In eu ligula sed quam aliquam varius. In congue arcu a nunc varius, vitae aliquet ligula fermentum.

In mattis ligula sapien, sit amet ultrices neque viverra nec. Integer iaculis convallis metus, aliquet ultrices ante tempus id. Sed non eros at tellus gravida auctor. Aenean sit amet mi lorem. Etiam id tempus nunc. Sed ultricies orci quis condimentum faucibus. Nam eget diam accumsan, egestas nunc id, efficitur lorem. Ut porta elementum augue eu convallis. Maecenas placerat odio a justo ornare convallis. Suspendisse cursus, quam ut feugiat tempor, quam lorem vestibulum eros, eu interdum justo elit sed risus.

Duis luctus ex et aliquam pharetra. </p>
                            </div>
                            <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <p>go to link</p>
            
            </Link>
                            <div className="d-flex">
                            <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
            <div className="card bg-dark mt-5">
                <div className="row g-0">
                 <div className="col-sm-12">
                <div className="card-body text-start">
                    <h2 className="card-title">New version for the game</h2>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <div className="row">
                <img src={screenshot2} className="img-fluid col-sm-4 mt-2" />
               
                    <p className="card-text col-sm-8 text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn btn-dark col-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                       More...
                        </button></div></div>
                    
                </div></div>  
                
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen " id="">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New version for the game</h5>
                                <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                                
                            </div>
                            <div className="modal-body">
                                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum maximus erat eu malesuada. Ut et tincidunt tellus. Curabitur pharetra pharetra aliquam. Aenean odio arcu, semper ut magna ac, tincidunt sodales justo. Nullam et tristique lectus. Suspendisse metus velit, scelerisque vel turpis imperdiet, dapibus congue tortor. Sed vel felis id metus iaculis mollis. Nulla ornare tristique consequat. Pellentesque libero quam, mollis eget libero ac, facilisis sollicitudin augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum id nibh quis bibendum. Fusce quis ornare enim. Suspendisse eget massa mauris. Fusce quis dapibus nisi.

Nunc ac porttitor neque. Vestibulum blandit felis vel ex congue luctus. Quisque eu finibus dolor, id pharetra nunc. Cras ac dolor vulputate, elementum sapien eget, facilisis massa. In rhoncus vulputate urna vitae tempor. Donec ut varius velit. Sed ut finibus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pharetra posuere nibh, a posuere nibh malesuada ut. Vestibulum sit amet nibh id turpis placerat pharetra quis sed sapien. Sed sagittis purus quis purus vestibulum, in lobortis neque mattis. Ut ornare magna leo, et tempor dui porta vitae. In eu ligula sed quam aliquam varius. In congue arcu a nunc varius, vitae aliquet ligula fermentum.

In mattis ligula sapien, sit amet ultrices neque viverra nec. Integer iaculis convallis metus, aliquet ultrices ante tempus id. Sed non eros at tellus gravida auctor. Aenean sit amet mi lorem. Etiam id tempus nunc. Sed ultricies orci quis condimentum faucibus. Nam eget diam accumsan, egestas nunc id, efficitur lorem. Ut porta elementum augue eu convallis. Maecenas placerat odio a justo ornare convallis. Suspendisse cursus, quam ut feugiat tempor, quam lorem vestibulum eros, eu interdum justo elit sed risus.

Duis luctus ex et aliquam pharetra. </p>
                            </div>
                            <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <p>go to link</p>
            
            </Link>
                            <div className="d-flex">
                            <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
                    
                    
            <div className="card bg-dark mt-5">
                <div className="row g-0">
                 <div className="col-sm-12">
                <div className="card-body text-start">
                    <h2 className="card-title">New version for the game</h2>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <div className="row">
                <img src={screenshot3} className="img-fluid col-sm-4 mt-2" />
               
                    <p className="card-text col-sm-8 text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn btn-dark col-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                       More...
                        </button></div></div>
                    
                </div></div>  
                
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen " id="">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New version for the game</h5>
                                <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                                
                            </div>
                            <div className="modal-body">
                                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum maximus erat eu malesuada. Ut et tincidunt tellus. Curabitur pharetra pharetra aliquam. Aenean odio arcu, semper ut magna ac, tincidunt sodales justo. Nullam et tristique lectus. Suspendisse metus velit, scelerisque vel turpis imperdiet, dapibus congue tortor. Sed vel felis id metus iaculis mollis. Nulla ornare tristique consequat. Pellentesque libero quam, mollis eget libero ac, facilisis sollicitudin augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum id nibh quis bibendum. Fusce quis ornare enim. Suspendisse eget massa mauris. Fusce quis dapibus nisi.

Nunc ac porttitor neque. Vestibulum blandit felis vel ex congue luctus. Quisque eu finibus dolor, id pharetra nunc. Cras ac dolor vulputate, elementum sapien eget, facilisis massa. In rhoncus vulputate urna vitae tempor. Donec ut varius velit. Sed ut finibus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pharetra posuere nibh, a posuere nibh malesuada ut. Vestibulum sit amet nibh id turpis placerat pharetra quis sed sapien. Sed sagittis purus quis purus vestibulum, in lobortis neque mattis. Ut ornare magna leo, et tempor dui porta vitae. In eu ligula sed quam aliquam varius. In congue arcu a nunc varius, vitae aliquet ligula fermentum.

In mattis ligula sapien, sit amet ultrices neque viverra nec. Integer iaculis convallis metus, aliquet ultrices ante tempus id. Sed non eros at tellus gravida auctor. Aenean sit amet mi lorem. Etiam id tempus nunc. Sed ultricies orci quis condimentum faucibus. Nam eget diam accumsan, egestas nunc id, efficitur lorem. Ut porta elementum augue eu convallis. Maecenas placerat odio a justo ornare convallis. Suspendisse cursus, quam ut feugiat tempor, quam lorem vestibulum eros, eu interdum justo elit sed risus.

Duis luctus ex et aliquam pharetra. </p>
                            </div>
                            <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <p>go to link</p>
            
            </Link>
                            <div className="d-flex">
                            <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
            <div className="card bg-dark mt-5">
                <div className="row g-0">
                 <div className="col-sm-12">
                <div className="card-body text-start">
                    <h2 className="card-title">New version for the game</h2>
                    <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                    <div className="row">
                <img src={screenshot3} className="img-fluid col-sm-4 mt-2" />
               
                    <p className="card-text col-sm-8 text-end">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <div className="row justify-content-end">
                    <button type="button" className="btn btn-dark col-3 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                       More...
                        </button></div></div>
                    
                </div></div>  
                
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen " id="">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">New version for the game</h5>
                                <small className="text-muted"><strong>MAJOR UPDATE</strong> FEB 15, 2023</small>
                                
                            </div>
                            <div className="modal-body">
                                <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum maximus erat eu malesuada. Ut et tincidunt tellus. Curabitur pharetra pharetra aliquam. Aenean odio arcu, semper ut magna ac, tincidunt sodales justo. Nullam et tristique lectus. Suspendisse metus velit, scelerisque vel turpis imperdiet, dapibus congue tortor. Sed vel felis id metus iaculis mollis. Nulla ornare tristique consequat. Pellentesque libero quam, mollis eget libero ac, facilisis sollicitudin augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vestibulum id nibh quis bibendum. Fusce quis ornare enim. Suspendisse eget massa mauris. Fusce quis dapibus nisi.

Nunc ac porttitor neque. Vestibulum blandit felis vel ex congue luctus. Quisque eu finibus dolor, id pharetra nunc. Cras ac dolor vulputate, elementum sapien eget, facilisis massa. In rhoncus vulputate urna vitae tempor. Donec ut varius velit. Sed ut finibus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam pharetra posuere nibh, a posuere nibh malesuada ut. Vestibulum sit amet nibh id turpis placerat pharetra quis sed sapien. Sed sagittis purus quis purus vestibulum, in lobortis neque mattis. Ut ornare magna leo, et tempor dui porta vitae. In eu ligula sed quam aliquam varius. In congue arcu a nunc varius, vitae aliquet ligula fermentum.

In mattis ligula sapien, sit amet ultrices neque viverra nec. Integer iaculis convallis metus, aliquet ultrices ante tempus id. Sed non eros at tellus gravida auctor. Aenean sit amet mi lorem. Etiam id tempus nunc. Sed ultricies orci quis condimentum faucibus. Nam eget diam accumsan, egestas nunc id, efficitur lorem. Ut porta elementum augue eu convallis. Maecenas placerat odio a justo ornare convallis. Suspendisse cursus, quam ut feugiat tempor, quam lorem vestibulum eros, eu interdum justo elit sed risus.

Duis luctus ex et aliquam pharetra. </p>
                            </div>
                            <Link to="https://store.steampowered.com/bundle/20465/Isolated_Games_Bundle/">
            <p>go to link</p>
            
            </Link>
                            <div className="d-flex">
                            <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                <div className="col-sm-4">
                <img src={screenshot} className="img-fluid" /></div>
                </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                
                            </div>
                            </div>
                        </div>
                        </div>
            </div>
            
           
        </div>    
        </div>
    )
}
export default News;