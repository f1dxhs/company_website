'use client'

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ChevronRight, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const WebsiteTemplate = () => {
  // ========== 状态管理 ==========
  // 控制移动端菜单的开关状态
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 记录页面滚动位置，用于导航栏样式变化
  const [scrollY, setScrollY] = useState(0);
  // 控制"回到顶部"按钮的显示/隐藏
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ========== 滚动监听效果 ==========
  // 监听页面滚动，实现导航栏透明度变化和回到顶部按钮显示
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // 当滚动超过300px时显示回到顶部按钮
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ========== 滚动功能函数 ==========
  // 平滑滚动到页面顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 平滑滚动到指定部分（用于导航点击）
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // 滚动后关闭移动端菜单
    setIsMenuOpen(false);
  };

  // ========== 产品数据 ==========
  // 网站展示的主要产品列表，对应"主要产品"部分
  const products = [
    {
      code: "DT II/DT II(A)",
      name: "Fixed Belt Conveyor",
      description: "DT II/DT II(A) fixed belt conveyor is an updated improvement based on the original TD75 DX conveyor, which is a general-purpose series product for domestic and international general use.",
      features: ["Multi-scenario Application", "Main Technical Parameters", "Flexible Layout"],
      applications: ["Mining", "Port", "Building Materials", "Power"]
    },
    {
      code: "Pipe Conveyor",
      name: "Pipe Belt Conveyor", 
      description: "Pipe belt conveyor is a new type of belt conveying equipment developed on the basis of ordinary belt conveyor, which realizes the breakthrough of traditional belt conveyor in the scope of use.",
      features: ["Environmental Protection", "Direction Change Transport", "Easy Cleaning"],
      applications: ["Power", "Metallurgy", "Building Materials", "Chemical", "Mining", "Coal", "Port"]
    },
    {
      code: "DJ Type",
      name: "Large Angle Corrugated Sidewall Belt Conveyor",
      description: "DJ type large angle corrugated sidewall belt conveyor, with its excellent performance and flexible design, is an ideal substitute for bucket elevator, currently applied in steel, building materials, mining and other industries.",
      features: ["Large Inclination Angle(30°-90°)", "Small Turning Radius", "Small Floor Area"],
      applications: ["Steel", "Building Materials", "Mining", "Coal"]
    },
    {
      code: "TDG/THG",
      name: "Bucket Elevator",
      description: "TDG and THG bucket elevators are improved products of DT and TH elevators respectively. This series of bucket elevators is suitable for cement, coal, sand, chemical, grain and other industries.",
      features: ["Mixed Discharge", "Gravity Discharge", "Centrifugal Discharge"],
      applications: ["Cement", "Coal", "Sand & Stone", "Chemical", "Grain"]
    }
  ];

  // ========== 技术优势数据 ==========
  // 网站展示的公司核心优势，对应"我们的优势"部分
  const advantages = [
    {
      title: "Excellent Expert",
      subtitle: "PROFESSIONAL TALENT",
      description: "DLM has a professional senior design and development technical team, with complete intelligent manufacturing foundation. Resident engineers from top universities including Sichuan University, Kunming University of Technology, Chongqing University, Dalian University of Technology, and Northeastern University."
    },
    {
      title: "Great Expertise", 
      subtitle: "PROFESSIONAL CAPABILITY",
      description: "DLM's excellent quality technical service and industrial equipment design capability, with over 30,000 sets of products shipped from the factory, providing customers with modern conveying equipment systems."
    },
    {
      title: "Safeguarding",
      subtitle: "SAFETY ASSURANCE", 
      description: "DLM has high-risk product protection and new equipment design capabilities, helping customers provide the latest environmental safety protection product solutions."
    },
    {
      title: "Efficient Cooperation",
      subtitle: "COLLABORATIVE EXCELLENCE",
      description: "DLM has an efficient and precise team that can better handle customer complaints and site processing, gradually implementing better customer service experiences."
    }
  ];

  // ========== 项目案例数据 ==========
  // 重点项目案例展示
  const projects = [
    {
      title: "Fuling Longqiao Power Plant Φ500mm Pipe Conveyor",
      location: "Chongqing · China",
      capacity: "1800t/h",
      speed: "4.2m/s",
      description: "In the Fuling Longqiao Power Plant Φ500mm pipe conveyor project, DLM's design adopted circular design tools for weight calculation, providing customers with breakthrough performance in thermal power transportation engineering."
    },
    {
      title: "Golmud 16KM Pipe Belt Conveyor", 
      location: "Qinghai · China",
      distance: "16KM",
      features: "50-year special design, ensuring 50-year service life",
      description: "In the Golmud 16KM pipe belt conveyor project in Qinghai, to ensure transportation and maintain wire material conveying lines - one of the transfer switching systems, DLM provided high-quality customized conveying equipment to ensure smooth project operation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ========== 顶部导航栏 ========== */}
      {/* 固定在页面顶部的导航菜单，包含Logo和导航链接 */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo区域 - 网站品牌标识 */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">DLM</h1>
              <p className="text-xs text-gray-600">Donglin Machinery</p>
            </div>

            {/* 桌面端导航菜单 - 在大屏幕上显示的水平导航 */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Home {/* 首页 */}
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  About Us {/* 关于我们 */}
                </button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Products {/* 产品中心 */}
                </button>
                <button onClick={() => scrollToSection('advantages')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Advantages {/* 技术优势 */}
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Projects {/* 项目案例 */}
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Contact {/* 联系我们 */}
                </button>
              </div>
            </div>

            {/* 移动端菜单按钮 - 汉堡菜单图标 */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端下拉菜单 - 在小屏幕上点击汉堡菜单后显示 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('advantages')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                Advantages
              </button>
              <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ========== 首页横幅区域 ========== */}
      {/* 全屏高度的英雄区域，包含主标题、副标题和行动按钮 */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        {/* 背景遮罩层 */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* 背景图案 */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\"><defs><pattern id=\"a\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23ffffff\" opacity=\"0.1\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23a)\"/></svg>')"
          }}
        ></div>
        
        {/* 主要内容区域 */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* 主标题 - 公司名称 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DONGLIN MACHINERY
            <span className="block text-blue-300">HEAVY INDUSTRY</span>
          </h1>
          {/* 副标题 - 公司简介 */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Expert of bulk material transportation - Professional design, manufacturing and technical services for belt conveyors, bucket elevators and material handling equipment.
          </p>
          {/* 行动按钮区域 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Learn More {/* 了解更多 */}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
            >
              Our Products {/* 我们的产品 */}
            </button>
          </div>
        </div>

        {/* 滚动指示器 - 提示用户向下滚动 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-white animate-bounce" size={32} />
        </div>
      </section>

      {/* ========== 关于我们部分 ========== */}
      {/* 公司介绍、历史、优势等内容展示区域 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 部分标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div> {/* 装饰线 */}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：公司介绍文字内容 */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Innovation in Bulk Material Transportation {/* 大宗物料输送技术创新 */}
              </h3>
              {/* 公司简介段落 */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sichuan DLM Heavy Industry Tech Co., LTD is a high-tech enterprise specializing in the design, manufacturing and technical services of bulk material transportation equipment, providing customers with breakthrough material handling solutions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Since its establishment in 1994, DLM has developed into a large-scale enterprise with 66,000 square meters of modern factory, more than 500 professional employees, and has established good business relationships with more than 800 partner companies, forming a complete industrial ecosystem.
              </p>
              
              {/* 核心数据展示 - 3个圆形图标 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">30+</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Years</h4> {/* 运营历程 */}
                  <p className="text-gray-600 text-sm">Experience and expertise</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">500+</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Employees</h4> {/* 专业员工 */}
                  <p className="text-gray-600 text-sm">Professional manufacturing team</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">800+</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Partners</h4> {/* 合作企业 */}
                  <p className="text-gray-600 text-sm">Global business network</p>
                </div>
              </div>
            </div>

            {/* 右侧：发展历程卡片 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-4">Development Course</h4> {/* 发展历程 */}
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-300 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>1994</strong> - Collective economic development mode</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-300 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>1998-2002</strong> - Reform and opening manufacturing development period</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-300 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>2008-2014</strong> - Smart technology center, top 30 Sichuan manufacturing base</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-blue-300 mt-1 mr-2 flex-shrink-0" size={16} />
                    <span><strong>2014-2019</strong> - National high-tech enterprise, professional equipment manufacturer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 产品中心部分 ========== */}
      {/* 展示公司的主要产品，每个产品包含编号、名称、描述和特性 */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 产品部分标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Products</h2> {/* 产品中心 */}
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our main products are designed to meet various material handling requirements, widely used in mining, ports, building materials, power and other industrial fields.
            </p>
          </div>

          {/* 产品网格布局 - 2列展示产品卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group">
                {/* 产品卡片头部 - 产品编号和箭头图标 */}
                <div className="flex items-start justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {product.code} {/* 产品编号 */}
                  </span>
                  <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                </div>
                
                {/* 产品名称 */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* 产品描述 */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                {/* 产品特性标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* 应用领域 */}
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Applications: </span>
                  {product.applications.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 技术优势部分 ========== */}
      {/* 展示公司的核心技术优势 */}
      <section id="advantages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 优势部分标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advantages</h2> {/* 我们的优势 */}
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              DLM relies on professional technical teams, advanced manufacturing capabilities and comprehensive service systems to provide customers with high-quality material handling solutions.
            </p>
          </div>

          {/* 优势网格布局 - 2x2展示优势卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                {/* 优势图标区域 */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-blue-600">DLM</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                    <p className="text-sm text-blue-600 font-medium">{advantage.subtitle}</p>
                  </div>
                </div>
                
                {/* 优势描述 */}
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 项目案例部分 ========== */}
      {/* 展示重点项目案例 */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 项目部分标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Cases</h2> {/* 项目案例 */}
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our products and technologies have been successfully applied to numerous major engineering projects, winning unanimous recognition and praise from customers.
            </p>
          </div>

          {/* 项目案例展示 */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* 项目信息 */}
                  <div>
                    <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4">
                      {project.location}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* 项目参数 */}
                    <div className="grid grid-cols-2 gap-4">
                      {project.capacity && (
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-2xl font-bold text-blue-600">{project.capacity}</div>
                          <div className="text-sm text-gray-500">Capacity</div>
                        </div>
                      )}
                      {project.speed && (
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-2xl font-bold text-blue-600">{project.speed}</div>
                          <div className="text-sm text-gray-500">Speed</div>
                        </div>
                      )}
                      {project.distance && (
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-2xl font-bold text-blue-600">{project.distance}</div>
                          <div className="text-sm text-gray-500">Distance</div>
                        </div>
                      )}
                      {project.features && (
                        <div className="bg-white rounded-lg p-4">
                          <div className="text-sm font-bold text-blue-600">{project.features}</div>
                          <div className="text-sm text-gray-500">Features</div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* 项目图片占位符 */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-white">DLM</span>
                        </div>
                        <p className="text-blue-600 font-medium">Project Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 联系我们部分 ========== */}
      {/* 包含联系信息和联系表单的深色背景区域 */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 联系部分标题 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2> {/* 联系我们 */}
            <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              For any material handling equipment needs or technical consultation, please feel free to contact our professional team at any time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左侧：联系信息 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3> {/* 取得联系 */}
              
              <div className="space-y-6">
                {/* 邮箱信息 */}
                <div className="flex items-start">
                  <Mail className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@dlm-china.com</p>
                    <p className="text-gray-300">sales@dlm-china.com</p>
                  </div>
                </div>
                
                {/* 电话信息 */}
                <div className="flex items-start">
                  <Phone className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+86 028 XXXX XXXX</p>
                    <p className="text-gray-300">+86 028 XXXX XXXX (Technical Support)</p>
                  </div>
                </div>
                
                {/* 地址信息 */}
                <div className="flex items-start">
                  <MapPin className="text-blue-400 mt-1 mr-4 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">
                      Sichuan DLM Heavy Industry Tech Co., LTD<br />
                      Chengdu, Sichuan Province, China<br />
                      [Complete Address Information]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：联系表单 */}
            <div>
              <div className="space-y-6">
                {/* 姓名输入行 - 分为姓名和公司两列 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label> {/* 姓名 */}
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label> {/* 公司名称 */}
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                
                {/* 邮箱和电话输入 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                {/* 产品需求选择 */}
                <div>
                  <label className="block text-sm font-medium mb-2">Product Interest</label> {/* 产品需求 */}
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white">
                    <option value="">Please select your interested product</option>
                    <option value="belt-conveyor">Belt Conveyor</option>
                    <option value="bucket-elevator">Bucket Elevator</option>
                    <option value="pipe-conveyor">Pipe Belt Conveyor</option>
                    <option value="steep-conveyor">Large Angle Conveyor</option>
                    <option value="other">Other Products</option>
                  </select>
                </div>
                
                {/* 留言内容输入 */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label> {/* 留言内容 */}
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                {/* 提交按钮 */}
                <button 
                  onClick={() => alert('Thank you for your inquiry! We will contact you as soon as possible. In actual implementation, this would submit the form data.')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Send Message {/* 发送消息 */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 网站页脚 ========== */}
      {/* 包含公司信息、快速链接、产品列表和版权信息 */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 公司信息区域 - 占据2列宽度 */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">DLM Heavy Industry</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Sichuan DLM Heavy Industry Tech Co., LTD - Professional bulk material transportation equipment manufacturer, committed to providing global customers with high-quality material handling solutions.
              </p>
              {/* 社交媒体图标 */}
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-xs">f</span> {/* Facebook */}
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-xs">in</span> {/* LinkedIn */}
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-xs">tw</span> {/* Twitter */}
                </div>
              </div>
            </div>
            
            {/* 快速链接列 */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4> {/* 快速链接 */}
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('products')} className="hover:text-white transition-colors">Products</button></li>
                <li><button onClick={() => scrollToSection('advantages')} className="hover:text-white transition-colors">Advantages</button></li>
                <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            
            {/* 产品列表列 */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4> {/* 主要产品 */}
              <ul className="space-y-2 text-gray-400">
                <li><span className="hover:text-white transition-colors">Belt Conveyor</span></li> {/* 带式输送机 */}
                <li><span className="hover:text-white transition-colors">Bucket Elevator</span></li> {/* 斗式提升机 */}
                <li><span className="hover:text-white transition-colors">Pipe Conveyor</span></li> {/* 圆管带式输送机 */}
                <li><span className="hover:text-white transition-colors">Steep Angle Conveyor</span></li> {/* 大倾角输送机 */}
                <li><span className="hover:text-white transition-colors">Technical Consulting</span></li> {/* 技术咨询 */}
              </ul>
            </div>
          </div>
          
          {/* 版权信息 */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sichuan DLM Heavy Industry Tech Co., LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ========== 回到顶部按钮 ========== */}
      {/* 固定在页面右下角的浮动按钮，滚动300px后显示 */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default WebsiteTemplate;