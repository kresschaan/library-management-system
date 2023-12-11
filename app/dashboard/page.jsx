"use client";
import { useEffect, useState } from "react";
import loginImg from "../../public/login-img.jpg";
import FormLogin from "../components/FormLogin";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

function Dashboard() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  let displayBooks;

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  //   console.log(apiKey);

  useEffect(() => {
    const retrieveBooks = async () => {
      try {
        setLoading(true);

        // Make a request to the Google Books API
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=programming&key=${apiKey}`,
        );

        console.log(response);

        // Extract the list of books from the response
        const bookList = response.data.items || [];

        // Update the state with the list of books
        setBooks(bookList);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    retrieveBooks();
  }, []);

  if (!loading) {
    const filteredBooks = books.filter((book) =>
      book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    console.log(filteredBooks);

    displayBooks = filteredBooks.map((book) => (
      <tr key={book.id} className="hover:bg-grey-lighter">
        <td className="border-grey-light border-b px-4 py-2">
          {book.volumeInfo.title}
        </td>
        <td className="border-grey-light border-b px-4 py-2">
          {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
        </td>
        <td className="border-grey-light border-b px-4 py-2">
          {book.volumeInfo.publishedDate}
        </td>
        <td className="border-grey-light border-b px-4 py-2">
          <Image
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
            width={100}
            height={150}
          />
        </td>
      </tr>
    ));
  }

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <div className="flex flex-1 flex-wrap">
        <div
          className="flex hidden w-full flex-col bg-white p-2 md:flex md:w-60"
          id="sideNav"
        >
          <nav>
            <Link
              className="my-4 block rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:cursor-pointer"
              href="/"
            >
              <i className="fas fa-home mr-2"></i>Home
            </Link>
            <Link
              className="my-4 block rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:cursor-pointer"
              href="/dashboard"
            >
              <i className="fas fa-file-alt mr-2"></i>Dashboard
            </Link>
            <Link
              className="my-4 block rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:cursor-pointer"
              href="#"
            >
              <i className="fas fa-users mr-2"></i>Manage Books
            </Link>
            <Link
              className="my-4 block rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:cursor-pointer"
              href="/login"
            >
              <i className="fas fa-store mr-2"></i>Logout
            </Link>
          </nav>

          <div
            className="my-2 mt-auto block rounded px-4 py-2.5 text-gray-500 transition duration-200 hover:cursor-pointer"
            href="#"
          ></div>
        </div>

        <div className="w-full flex-1 p-4 md:w-1/2">
          <div className="relative w-full max-w-md">
            <div className="absolute left-2 top-1 inline-flex items-center p-2">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              className="focus:shadow-outline h-10 w-full rounded-full border py-1 pl-10 pr-4 text-base placeholder-gray-500"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
          </div>

          <div className="mt-8 rounded-lg bg-white p-4 shadow">
            <div className="mt-4 rounded-md bg-white p-4">
              <h2 className="pb-4 text-center text-lg font-semibold text-gray-500">
                List of Books
              </h2>
              <div className="my-1"></div>
              <div className="mb-6 h-px bg-gradient-to-r from-primary-3 to-secondary-1"></div>
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-left text-sm font-bold">
                      Title
                    </th>
                    <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-left text-sm font-bold">
                      Author
                    </th>
                    <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-left text-sm font-bold">
                      Date
                    </th>
                    <th className="bg-grey-lightest text-grey-light border-grey-light border-b px-4 py-2 text-left text-sm font-bold">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>{displayBooks}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
