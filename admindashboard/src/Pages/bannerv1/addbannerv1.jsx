export default function Addbannerv1() {
  return (
    <>
      <section className="p-5 bg-gray-50">
        <form className="p-8 py-3 " onSubmit={handlesubmit}>
          <div className="grid grid-cols-1 mb-3 gap-4">
            <div className="col w-[34%]">
              <h3 className="text-[16px] font-[600] mb-2">Banner Title</h3>
              <input
                type="text"
                // name="name"
                // value={formfields?.name}
                // onChange={onChangeInput}
                className="w-full h-[35px] rounded-md p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.5)]"
              />
            </div>

            <div className="col">
              <h3 className="text-[16px] font-[600] mb-2">Product Category</h3>
              {context.catData.length !== 0 && (
                <Select
                  labelId="demo-simple-select-label"
                  id="ProductCat"
                  name="productCat"
                  value={Cat}
                  className="w-full bg-white rounded-md h-[45px]"
                  label="Category"
                  onChange={handleChange}
                >
                  {context.catData.map((cat, index) => (
                    <MenuItem
                      key={index}
                      value={cat._id}
                      onClick={() => {
                        selectCatByName(cat.name);
                      }}
                    >
                      {cat.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </div>
          </div>
          <div className="scroll max-h-[75vh] pr-4 overflow-y-auto">
            <div className="w-full p-5 px-0">
              <h3 className="text-lg font-semibold mb-2">Category Image</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-6">
              {preview.length !== 0 &&
                preview.map((image, index) => (
                  <div className="relative group" key={index}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeImage(image, index);
                      }}
                      className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full w-6 h-6 flex items-center justify-center z-10 shadow-md"
                    >
                      <IoCloseSharp className="text-sm" />
                    </button>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg overflow-hidden h-[150px] w-full bg-gray-100 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center">
                      <LazyLoadImage
                        alt={`Category Image ${index + 1}`}
                        effect="blur"
                        className="w-full h-full object-cover"
                        src={image.url}
                      />
                    </div>
                  </div>
                ))}

              <FileUploadBox
                multiple={true}
                url="/api/category/upload"
                setpreviewfun={setpreviewfun}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="!bg-primary !text-white items-center mt-4 w-full !pr-2 gap-2 !pl-12"
          >
            <IoMdCloudUpload className="text-[25px] " /> Publish Category
            {isLoading && <CircularProgress color="inherit" size={20} />}
          </Button>
        </form>
      </section>
    </>
  );
}
