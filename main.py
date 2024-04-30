import nbformat

notebook1_path = "./2.ipynb"
notebook2_path = "./eda_cleaning.ipynb"

with open(notebook1_path, "r") as notebook1_file:
    notebook1 = nbformat.read(notebook1_file, as_version=4)


with open(notebook2_path, "r") as notebook2_file:
    notebook2 = nbformat.read(notebook2_file, as_version=4)

cells1 = notebook1["cells"]
cells2 = notebook2["cells"]


combined_contents = cells1 + cells2

combined_notebookk = nbformat.v4.new_notebook(cells=combined_contents)
with open("eda_cleaning.ipynb", "w") as f:
    nbformat.write(combined_notebookk, f)

