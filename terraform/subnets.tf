# Public Subnet 1
resource "aws_subnet" "public_subnet_1" {
  vpc_id                  = aws_vpc.project_vpc.id
  cidr_block              = "10.0.0.0/20"
  availability_zone       = "ap-southeast-2a"
  map_public_ip_on_launch = true

  tags = {
    Name = "Public-Subnet-1"
  }
}

# Public Subnet 2
resource "aws_subnet" "public_subnet_2" {
  vpc_id                  = aws_vpc.project_vpc.id
  cidr_block              = "10.0.16.0/20"
  availability_zone       = "ap-southeast-2b"
  map_public_ip_on_launch = true

  tags = {
    Name = "Public-Subnet-2"
  }
}

# Private Subnet 1
resource "aws_subnet" "private_subnet_1" {
  vpc_id            = aws_vpc.project_vpc.id
  cidr_block        = "10.0.128.0/20"
  availability_zone = "ap-southeast-2a"

  tags = {
    Name = "Private-Subnet-1"
  }
}

# Private Subnet 2
resource "aws_subnet" "private_subnet_2" {
  vpc_id            = aws_vpc.project_vpc.id
  cidr_block        = "10.0.144.0/20"
  availability_zone = "ap-southeast-2b"

  tags = {
    Name = "Private-Subnet-2"
  }
}

# Database Subnet 1
resource "aws_subnet" "db_subnet_1" {
  vpc_id            = aws_vpc.project_vpc.id
  cidr_block        = "10.0.160.0/20"
  availability_zone = "ap-southeast-2a"

  tags = {
    Name = "DB-Subnet-1"
  }
}

# Database Subnet 2
resource "aws_subnet" "db_subnet_2" {
  vpc_id            = aws_vpc.project_vpc.id
  cidr_block        = "10.0.176.0/20"
  availability_zone = "ap-southeast-2b"

  tags = {
    Name = "DB-Subnet-2"
  }
}