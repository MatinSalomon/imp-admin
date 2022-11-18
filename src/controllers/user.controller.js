import { pool } from "../database.js";

export const renderUser = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM usuarios");
    res.render("user/main", { users: rows });
  };

  export const deleteUser = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM usuarios WHERE ID = ?", [id]);
    req.flash("success", "user Removed Successfully");
    res.redirect("/user");
  };
  
  export const renderEditUser = async (req, res) => {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    res.render("user/edit", { users: rows[0] });
  };

  export const editUser = async (req, res) => {
    const { id } = req.params;
    const { username,password, email } = req.body;
    const newUser = {
      username,
      password,
      email
    };
    await pool.query("UPDATE usuarios set ? WHERE id = ?", [newUser , id]);
    req.flash("success", "elemento Updated Successfully");
    res.redirect("/user");
  };