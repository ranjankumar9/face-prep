import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import css from "../Styles/Home.module.css";
import Navbar from "../Components/Navbar";

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

const Home: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const navigate = useNavigate();

  const GetData = async () => {
    try {
      const response: AxiosResponse = await axios.get(
        `https://randomuser.me/api/?results=12`
      );
      const newData: User[] = response.data.results;
      setData((prevData) => [...prevData, ...newData]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  console.log(data);

  return (
    <div>
      <Navbar />
      <div className={css.main}>
        <InfiniteScroll
          dataLength={data.length}
          next={GetData}
          loader={
            <img
              src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/shot.gif"
              width="100"
              alt="Loader broken"
            />
          }
          hasMore={hasMore}
          endMessage={<h4>Wow! You have visited all the users. Thank you.</h4>}
        >
          <div className={css.card}>
            {data.length > 0 &&
              data.map((el, index) => {
                return (
                  <div className={css.card1} key={index}>
                    <img src={el.picture.large} alt="" />
                    <p>
                      {el.name.first} {el.name.last}
                    </p>
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export { Home };
