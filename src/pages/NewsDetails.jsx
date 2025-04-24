import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <div className="w-11/12 mx-auto grid grid-cols-12 gap-5">
                    <section className="col-span-9">
                        <h3 className="font-bold mb-3">Dragon News</h3>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={news?.image_url}
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{news?.title}</h2>
                                <p>{news?.details}</p>
                                <div className="card-actions">
                                    <Link to="/category/01" className="btn btn-primary">Show All News</Link>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className="col-span-3">
                        <RightNav></RightNav>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default NewsDetails;