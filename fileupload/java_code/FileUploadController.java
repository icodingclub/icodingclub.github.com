package com.fileupload.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@WebServlet("/fileUpload")
@MultipartConfig(fileSizeThreshold = 1024 * 1024 * 1, // 1 MB
maxFileSize = 1024 * 1024 * 5, // 5 MB
maxRequestSize = 1024 * 1024 * 10)
// 10 MB
public class FileUploadController extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Part part = request.getPart("blob");
		String fileName = null;
		if (part != null) {
			//writing blob
			fileName = request.getParameter("blobName");
			part.write(Path.UPLOAD_DIR + File.separator + fileName);

		} else {
			//Writing image or file
			part = request.getPart("file");
			fileName = getFileName(part);
			part.write(Path.UPLOAD_DIR + File.separator + fileName);
		}

		// Extra logic to support multiple domain - you may want to remove this
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.getWriter().print(fileName + " uploaded successfully");
	}

	private String getFileName(Part part) {
		String contentDisp = part.getHeader("content-disposition");
		System.out.println("content-disposition header= " + contentDisp);
		String[] tokens = contentDisp.split(";");
		for (String token : tokens) {
			if (token.trim().startsWith("filename")) {
				return token.substring(token.indexOf("=") + 2,
						token.length() - 1);
			}
		}
		return "";
	}
}
