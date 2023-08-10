import axios from 'axios'
import useCompany from "@/hooks/useCompany";

export default async function CompanyDetail({ id }) {
  try{
      const { data } = await axios(`http://localhost:3001/profile/${id}`);
      let company = data;
      return (
        <div id="users" className="mt-10 bg-slate-50 rounded-lg shadow-md">
          <div className="flex flex-col items-center m-5">
            <div className="m   -5">
              <img className="m-5" src={company.imageUrl} />
              <h1 className="mb-10 justify-center">
                Company Name: {company.name}{" "}
              </h1>
              <h1 className="mb-10 justify-center">
                Email: {company.email}{" "}
              </h1>
              <h1 className="mb-10 justify-center">CUIT: {company.cuit} </h1>
              <h1 className="mb-10 justify-center">
                Address: {company.address}{" "}
              </h1>
              <h1 className="mb-10 justify-center">
                Company Description: {company.description}{" "}
              </h1>
              <h1 className="mb-10 justify-center">
                Phone Number: {company.phoneNumber}{" "}
              </h1>
            </div>
    
            <div>
              {company.Item?.map((item, index) => {
                return (
                  <div
                    className="mb-10 p-4 flex flex-col justify-center text-center flex-wrap bg-slate-50 rounded-lg shadow-2xl"
                    key={index}
                  >
                    <div className="flex justify-center">
                      <img src={item.url_image} className="rounded-lg" />
                    </div>
                    <div className="flex justify-center">
                      <h1 className="m-10"> {item.name} </h1>
                      <h1 className="m-10">
                        {item.price === 0 ? (
                          <div>{item.discount}% discount</div>
                        ) : (
                          <div className="flex flex-col">
                            <div>{item.discount}% discount</div>
                            <div>${item.price}</div>
                          </div>
                        )}{" "}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
  }catch(error){
    //proximamente 
  }
}
