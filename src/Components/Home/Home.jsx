import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/sidebar.scss";
import Navbar from "../Navbar/Navbar";
import "./home.scss";
import Curvy from "../../Images/curvy-lines.png";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="health">
          <h2>API Health</h2>
          <p>IP Address: 3478rfuhjdvb837t374fh</p>

          <div className="progress">
            <p>Progress Status</p>
            <button className="serverBtn">Server Down</button>
          </div>
        </div>

        <div className="container-1">


          <div className="card1">

        
            <div className="clients">
              <p>Clients</p>
              <button className="btnCl">0 Missing</button>
            </div>

            <div className="status">
              <table className="tableStatus">
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Status</th>
                    <th style={{ textAlign: "right" }} className="align-right">
                      Acceptancy
                    </th>
                    <th style={{ textAlign: "right" }}>Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "left" }}><span className="logo2" style={{background:'#E9001C'}}></span> Client 1</td>
                    <td style={{ marginRight: "23px" }} className="align-right">
                      1ms
                    </td>
                    <td style={{ textAlign: "right" }}>6543</td>
                  </tr>
                  <tr>
                    <td><span className="logo2" style={{background:'#F7931A'}}></span> Client 2</td>
                    <td className="align-right">1ms</td>
                    <td style={{ textAlign: "right" }}>6543</td>
                  </tr>
                  <tr>
                    <td><span className="logo2" style={{background:'#219653'}}></span> Client 3</td>
                    <td className="align-right">1ms</td>
                    <td style={{ textAlign: "right" }}>6543</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


      <div className="order-response">
                <h2 className="heading">Order response</h2>
                <div className="trade" style={{width: '450px'}}>
    

    <table className="tableTrade">
    <thead style={{background:'#2E2838'}}>
      <tr>
        <th>Trade Identifier</th>
        <th>App Order ID</th>
      </tr>
    </thead>
    <tbody style={{background: '#3C354A'}}>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
    </tbody>
  </table>
</div>


            </div>



            <div className="order-response" style={{marginLeft:'20px'}}>
                <h2 className="heading">Order Mismatch</h2>
                <div className="trade" style={{width: '450px'}}>
    

    <table className="tableTrade">
    <thead style={{background:'#2E2838'}}>
      <tr>
        <th>Account ID</th>
        <th>Mismatch No#</th>
      </tr>
    </thead>
    <tbody style={{background: '#3C354A'}}>
      <tr>
        <td>Sagar-VRP</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</div>


            </div>





        </div>





        <div className="container-1">



      <div className="order-response">
                <h2 className="heading">Position Difference</h2>
                <div className="trade" style={{width: '450px'}}>
    

    <table className="tableTrade">
    <thead style={{background:'#2E2838'}}>
      <tr>
        <th>Client ID</th>
        <th>No of responses</th>
      </tr>
    </thead>
    <tbody style={{background: '#3C354A'}}>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
    </tbody>
  </table>
</div>


            </div>



            <div className="order-response" style={{marginLeft:'23px'}}>
                <h2 className="heading">Profit and Loss</h2>
                <div className="trade" style={{width: '450px'}}>
    

    <table className="tableTrade">
    <thead style={{background:'#2E2838'}}>
      <tr>
        <th>Trade Identifier</th>
        <th>App Order ID</th>
      </tr>
    </thead>
    <tbody style={{background: '#3C354A'}}>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>u8y8y8</td>
      </tr>
    </tbody>
  </table>
</div>


            </div>



            <div className="order-response" style={{marginLeft:'20px'}}>
                <h2 className="heading">Margin Usage</h2>
                <div className="trade" style={{width: '450px'}}>
    

    <table className="tableTrade">
    <thead style={{background:'#2E2838'}}>
      <tr>
        <th>Account ID</th>
        <th>Mismatch No#</th>
      </tr>
    </thead>
    <tbody style={{background: '#3C354A'}}>
      <tr>
        <td>Sagar-VRP</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Sagar-VRP</td>
        <td>1</td>
      </tr>
    </tbody>
  </table>
</div>


            </div>





        </div>

        <div className="up" style={{marginTop:'20px'}}></div>



      </div>
    </div>
  );
};

export default Home;
