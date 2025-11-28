import { useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Video } from "lucide-react";

interface MeetingsIf {
  title: string,
  date: string,
  status: string
};

const Dashboard = () => {

  const [meetings, setMeetings] = useState<MeetingsIf[]>([]);


  const navigate = useNavigate();


  const fetchData = async (accessToken: string) => {
    console.log(accessToken);
    try {
      const response = await axios.get(`${import.meta.env.VITE_MEETINGS_API}/meetings/fetch-student-historic-meetings`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.data;

      setMeetings(data.meetings);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }
  };


  const findMeetingStatusClip = (status: string) => {
    switch(status){
      case "completed":
        return "bg-green-200 text-green-600";
      
      case "ongoing":
        return "bg-yellow-200 text-yellow-600";

      case "scheduled":
        return "bg-blue-200 text-blue-600";
    };
  };



  useEffect(() => {
    const value = sessionStorage.getItem("B2P-PARENTS-ACCESS-TOKEN");
    const token = value ? JSON.parse(value) : null;
    const date = Date.now();
    if (!token || date > token.expiry) {
      navigate("/");
    } else {
      console.log(token.token);
      fetchData(token.token);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 background">
      <Navbar />
      
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Welcome Parent</h2>
          </div>

        </div>
        <div className="overflow-x-auto mt-[1rem] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[1rem]">
            <div className="col-span-1 bg-white px-[1rem] py-[0.5rem] rounded-lg">
              <div className="border-b-[1px] border-gray-200 py-[1rem]">
                <h1 className="capitalize text-[1.25rem]">you wards schedule</h1>
              </div>
              <div className="py-[1rem] flex flex-col gap-[1rem]">
                {/* meetings container */}
                <div className="flex flex-col gap-[1rem]">
                  {
                    meetings.length == 0?
                      <div className="">
                        <h1 className="capitalize text-center">meeting records not found</h1>
                      </div>
                      :
                      meetings.map((meeting, key) => (
                        <div key={key} className="flex flex-col items-start md:flex-row items-center justify-between bg-gray-50 p-[1rem] rounded-lg">
                          <div className="flex  items-center gap-[1rem]">
                            <div className="p-[0.5rem] bg-blue-200 rounded-lg w-fit">
                              <Video size={25} color="blue"/>
                            </div>
                            <div className="">
                              <h1 className="capitalize font-semibold">{meeting.title}</h1>
                              <p className="text-sm text-gray-500">{meeting.date}</p>
                            </div>
                          </div>
                          <div className="mt-[1rem] md:mt-0">
                            <div className={`${findMeetingStatusClip(meeting.status)} px-[1rem] py-[0.5rem] rounded-lg`}>
                              <h1 className="capitalize font-semibold text-sm">{meeting.status}</h1>
                            </div>
                          </div>
                        </div>
                      ))
                    }
                </div>

              </div>
            </div>
            <div className="col-span-1 bg-white px-[1rem] py-[0.5rem] rounded-lg">
              <div className="border-b-[1px] border-gray-200 py-[1rem]">
                <h1 className="capitalize text-[1.25rem]">you wards remarks</h1>
              </div>
              <div className="flex flex-col gap-[1rem] py-[1rem]">
                {/* remarks wrapper container */}
                <div className="">
                  <h1 className="capitalize text-center">no remarks found</h1>
                </div>
                {/* <div className="bg-gray-50 p-[0.5rem] rounded-lg">
                  <div className="">
                    <h1 className="capitalize font-semibold">sample remark</h1>
                    <p className="text-sm text-gray-500">B2PTECH80 . 20.12.2025</p>
                  </div>
                  <div className="mt-[1rem]">
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-[0.5rem] rounded-lg">
                  <div className="">
                    <h1 className="capitalize font-semibold">sample remark</h1>
                    <p className="text-sm text-gray-500">B2PTECH80 . 20.12.2025</p>
                  </div>
                  <div className="mt-[1rem]">
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;