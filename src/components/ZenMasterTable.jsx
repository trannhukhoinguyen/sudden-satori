import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import "../styles/zenmaster.css";

export default function ZenMasterTable({ jsonUrl }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Load JSON
  useEffect(() => {
    fetch(jsonUrl)
        .then((res) => res.json())
        .then((d) => setData(d));
  }, [jsonUrl]);

  // Đọc state từ URL khi load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearch(params.get("q") || "");
    setSortKey(params.get("sort") || null);
    setSortAsc(params.get("asc") !== "false");
    setCurrentPage(parseInt(params.get("page") || "0"));
    setPerPage(parseInt(params.get("perPage") || "5"));
  }, []);

  // Update URL khi state thay đổi
  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (sortKey) params.set("sort", sortKey);
    params.set("asc", sortAsc);
    params.set("page", currentPage);
    params.set("perPage", perPage);
    window.history.replaceState({}, "", "?" + params.toString());
  }, [search, sortKey, sortAsc, currentPage, perPage]);

  // Sort + Search
  const filteredData = data
      .filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (!sortKey) return 0;
        const valA = a[sortKey]?.toLowerCase?.() || a[sortKey];
        const valB = b[sortKey]?.toLowerCase?.() || b[sortKey];
        if (valA < valB) return sortAsc ? -1 : 1;
        if (valA > valB) return sortAsc ? 1 : -1;
        return 0;
      });

  const totalPages = Math.ceil(filteredData.length / perPage);
  const pageData = filteredData.slice(
      currentPage * perPage,
      currentPage * perPage + perPage
  );

  const changeSort = (key) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
      <div className="wrapper" style="margin: 40px 0;">
        {/* Search + perPage */}
        <div className="toolbar" style={{display: "flex", gap: "12px", marginBottom: "12px"}}>
          <input
              placeholder="Search Zen Master..."
              value={search}
              onInput={(e) => {
                setSearch(e.target.value);
                setCurrentPage(0);
              }}
          />
          <select
              value={perPage}
              onChange={(e) => {
                setPerPage(parseInt(e.target.value));
                setCurrentPage(0);
              }}
          >
            {[5, 10, 20].map((n) => (
                <option value={n}>{n} / page</option>
            ))}
          </select>
        </div>

        <table className="table table-responsive table-hover">
          <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th onClick={() => changeSort("name")} style={{cursor: "pointer"}}>
              NAME {sortKey === "name" ? (sortAsc ? "▲" : "▼") : ""}
            </th>
            <th onClick={() => changeSort("era")} style={{cursor: "pointer"}}>
              ERA {sortKey === "era" ? (sortAsc ? "▲" : "▼") : ""}
            </th>
            <th
                onClick={() => changeSort("country")}
                style={{cursor: "pointer"}}
            >
              COUNTRY {sortKey === "country" ? (sortAsc ? "▲" : "▼") : ""}
            </th>
            <th>INTRO</th>
            <th>TEACHER</th>
            <th>DISCIPLES</th>
            <th onClick={() => changeSort("nameEn")} style={{cursor: "pointer"}}>
              NAME EN {sortKey === "nameEn" ? (sortAsc ? "▲" : "▼") : ""}
            </th>
            <th>NAME ZH</th>
            <th onClick={() => changeSort("nameJp")} style={{cursor: "pointer"}}>
              NAME JP {sortKey === "nameJp" ? (sortAsc ? "▲" : "▼") : ""}
            </th>
          </tr>
          </thead>
          <tbody>
          {pageData.map((item, i) => (
              <tr key={item.youtubeId}>
                <td style={{verticalAlign: "middle"}}>{currentPage * perPage + i + 1}</td>
                <td style={{verticalAlign: "middle"}}>
                  <div className="thumb" style={{width: "70px", height: "50px", overflow: "hidden"}}>
                    <img
                        className="img-responsive"
                        src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    />
                  </div>
                </td>
                <td style={{verticalAlign: "middle"}}>{item.name}</td>
                <td style={{verticalAlign: "middle"}}>{item.era}</td>
                <td style={{verticalAlign: "middle"}}>{item.country}</td>
                <td style={{verticalAlign: "middle"}}>
                  <button
                      className="btn btn-info"
                      onClick={() => setSelectedVideo(item.youtubeId)}
                  >
                    Play
                  </button>
                </td>
                <td style={{verticalAlign: "middle"}}>{item.teacher}</td>
                <td style={{verticalAlign: "middle"}}>{item.disciples?.join(', ')}</td>
                <td style={{verticalAlign: "middle"}}>{item.nameEn}</td>
                <td style={{verticalAlign: "middle"}}>{item.nameZh}</td>
                <td style={{verticalAlign: "middle"}}>{item.nameJp}</td>
              </tr>
          ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination" style={{marginTop: "12px", display: "flex", gap: "8px"}}>
          <button
              disabled={currentPage === 0}
              onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          {
            [...Array(totalPages)].map((_, i) => {
              return i === currentPage
              ? <button
                    key={i}
                    className="active"
                    style={{background: "#333", color: "white"}}
                    onClick={() => setCurrentPage(i)}
                >
                  {i + 1}
                </button>
              : <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                >
                  {i + 1}
                </button>
            })
          }
          <button
              disabled={currentPage >= totalPages - 1}
              onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>

        {/* Modal Video */}
        {selectedVideo && (
            <div
                className="video_box"
                onClick={() => setSelectedVideo(null)}
                style={{
                  background: "rgba(0, 0, 0, 0.54)",
                  width: "100%",
                  height: "100%",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
            >
              <div className="video_inner" style={{background: "#fff", padding: "15px", position: "relative"}}>
                <button
                    className="modal-close"
                    onClick={() => setSelectedVideo(null)}
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      background: "#d64a4a",
                      color: "#fff",
                      border: "none",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                >
                  ×
                </button>
                <div className="video_body">
                  <iframe
                      width="400"
                      height="250"
                      src={`https://www.youtube.com/embed/${selectedVideo}`}
                      frameBorder="0"
                      allowFullScreen
                      style={{width: "400px", height: "250px"}}
                  ></iframe>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}
