function sidebar() {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="container border">
                    {/* <header className="col-4"> */}
                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4">
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                                    <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple active">
                                    <i class="fas fa-chart-area fa-fw me-3"></i><span>Product catalog</span>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                    class="fas fa-lock fa-fw me-3"></i><span>Catalog management</span></a>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                                    class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                    <i class="fas fa-chart-pie fa-fw me-3"></i><span>Coupons</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <hr />
                    <p className="ms-5">Feedback</p>
                    {/* </header> */}
                </div>
            </div>
            <div class="pb-5 pt-5 col-md-4">
                <div class="card-body  text-center"><p>since Joined</p><br></br>
                    <h3>Performance Overview</h3>
                </div>
            </div>
            <div class=" pt-5 pb-5 col-md-4">
                <div class="card-body  text-center "><p>Total Revenue</p><br></br>
                    <h1>$125,24</h1>
                </div>
            </div>
        </div>
    )
}
export default sidebar;