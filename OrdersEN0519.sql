USE master  
GO
IF  EXISTS (SELECT name FROM sys.databases WHERE name='Order')
DROP DATABASE [Order]
GO

CREATE DATABASE [Order]
GO

USE [Order]
GO

-- 由上到下
-- 產品編號
-- 產品類型
-- 產品名稱
-- 產品圖片
-- 產品價格
-- 產品介紹

CREATE TABLE [Products] (
	[ProductID] int IDENTITY(1,1)PRIMARY KEY,
	[ProductType] varchar(max) NULL,
	[ProductName] varchar(max) NULL,
	[ProductImg] nvarchar(max) NULL,
	[ProductPrice] int NULL,
    [Productdata] nvarchar(max) NULL,
) 
GO

-- 由上到下
-- 訂單編號	
-- 會員編號
-- 會員姓名
-- 產品名稱
-- 訂單日期
-- 訂購數量
-- 收貨地址
-- 總金額

CREATE TABLE [OrderDetails] (
	[OrderID] int IDENTITY (1,1) PRIMARY KEY,
    [MemberID] nvarchar(max) NULL,
    [MemberName] nvarchar(max) NULL,
	[ProductID] nvarchar(max) NULL,
	[ProductName] nvarchar(max) NULL,
	[OrderDate] nvarchar(max) NULL,	
	[Quantity] nvarchar(max) NULL,
    [Address] nvarchar(max) NULL,
	[Phone] nvarchar(max) NULL,
	[PaymentMethod] nvarchar(max) NULL,
	[PickUpAtTheStoreDate] nvarchar(max) NULL,
	[TotalPrice] int NULL,	
) 
GO
 

INSERT INTO [Products] (ProductType,ProductName,ProductImg,ProductPrice,Productdata)
VALUES ('Cake','乳酪蛋糕','https://upload.cc/i1/2021/05/07/lIiWcS.jpg',150,NULL)
GO
INSERT INTO [Products] (ProductType,ProductName,ProductImg,ProductPrice,Productdata)
VALUES ('Dessert','提拉米蘇','https://upload.cc/i1/2021/05/07/iX2LQh.jpg',250,NULL)
GO
INSERT INTO [Products] (ProductType,ProductName,ProductImg,ProductPrice,Productdata)
VALUES ('Bread','可頌','https://upload.cc/i1/2021/05/07/J2zjVs.jpg',50,NULL)
GO




