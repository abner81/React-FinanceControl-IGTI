import React from "react";
import * as S from "./styled";

export default function index({ totalPages, currentPage, handleNewPage }) {
  let arrayContentList = [];
  for (let i = 1; i <= totalPages; i++) {
    arrayContentList.push(i);
  }

  const handlePageNumbers = (event) => {
    handleNewPage(event.target.innerHTML)
  };

  const handlePage = (event) => {
    if (
      event.target.innerHTML === 
        '<span aria-hidden="true">»</span><span className="sr-only">Próxima</span>' || 
      event.target.innerHTML === '»') {
      if (currentPage + 1 <= arrayContentList.length)
        handleNewPage(currentPage + 1);
    }

    if (
      event.target.innerHTML ===
        '<span aria-hidden="true">«</span><span className="sr-only">Voltar</span>' ||
      event.target.innerHTML === "«"
    ) {
      if (currentPage -1 !== 0)
        handleNewPage(currentPage - 1);
    }
  };

  return (
    <S.NavWrapper aria-label="Page navigation example">
      <ul className="pagination pagination-lg justify-content-center">
        {currentPage - 1 === 0 && (
          <li className="page-item disabled" onClick={handlePage}>
            <a
              className="page-link"
              href="/#"
              aria-label="Previous"
              tabindex="-1"
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Voltar</span>
            </a>
          </li>
        )}

        {currentPage - 1 === 0 || (
          <li className="page-item" onClick={handlePage}>
            <a
              className="page-link"
              href="/#"
              aria-label="Previous"
              tabindex="-1"
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Voltar</span>
            </a>
          </li>
        )}

        {arrayContentList.map((content) => {
          if (currentPage === content) {
            return (
              <li
                className="page-item active"
                value={content}
                onClick={handlePageNumbers}
              >
                <a className="page-link" href={`/#`}>
                  {content}
                </a>
              </li>
            );
          } 
            if (currentPage !== content) {
              return (
                <li
                  className="page-item"
                  value={content}
                  onClick={handlePageNumbers}
                >
                  <a className="page-link" href={`/#`}>
                    {content}
                  </a>
                </li>
              );
            }
        })}

        {currentPage + 1 > arrayContentList.length && (
          <li className="page-item disabled" onClick={handlePage}>
            <a className="page-link" href="/#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Próxima</span>
            </a>
          </li>
        )}

        {currentPage + 1 <= arrayContentList.length && (
          <li className="page-item" onClick={handlePage}>
            <a className="page-link" href="/#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Próxima</span>
            </a>
          </li>
        )}
      </ul>
    </S.NavWrapper>
  );
}
