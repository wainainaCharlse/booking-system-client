import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=kisumu,nairobi,mombasa"
 
  );
  console.log(data)
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
               src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kisumu</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
            src="https://media.istockphoto.com/id/637912692/photo/nairobi-cityscape-capital-city-of-kenya.jpg?s=612x612&w=0&k=20&c=S8wPNq9om-IMcapXFC030ew28nhpYCFYBStX5yxCQbs="
             
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nairobi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/1455430684/photo/drone-shot-over-the-beach-of-the-coastal-part-of-mombasa-kenya-at-sunrise.jpg?s=612x612&w=0&k=20&c=Qq2Mfvk850PwrothLUruu4q2hzbaNDlPex2V79MnY1Y="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mombasa</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
