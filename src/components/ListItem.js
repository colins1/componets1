export default function ListItem({ children }) {
    return <div className="card" style={{width: "18rem", marginTop: "10px"}}>
              {children.img !== undefined ? <img src={children.img} className="card-img-top"/> : ""}
              <div className="card-body">
                <h5 className="card-title">{children.title}</h5>
                <p className="card-text">{children.descr}</p>
                <a href="#" className="btn btn-primary">{children.linkText}</a>
              </div>
            </div>;
  }