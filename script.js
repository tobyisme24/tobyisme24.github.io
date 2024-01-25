// script.js
function submitForm() {
  console.log("Submit button clicked!"); // 添加这行日志
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;

  // ... 以下是你的 fetch 代码

  // 向 Google Apps Script 发送数据
  fetch(
    "https://script.google.com/macros/s/AKfycbx5iiHVgIElKXG8dB2Jdhr34PU69_lVA9p9RBYTp_3kHg4SNHFkHmyWBswbeeJLeIhd/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, location: location }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // 处理成功的响应
    })
    .then((data) => {
      console.log(data);
      // 如果需要，可以在这里处理成功的响应
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// 将提交按钮与处理函数关联
document.getElementById("submitBtn").addEventListener("click", submitForm);
