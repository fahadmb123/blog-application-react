import "./AddBlog.css";

function AddBlog() {
  return (
    <div className="addBlog">
      <h1>Add Blog</h1>

      <form>

        <input
          type="text"
          placeholder="Blog Title"
        />

        <textarea placeholder="Write your blog..."></textarea>

        <button>Add Blog</button>

      </form>
    </div>
  );
}

export default AddBlog;