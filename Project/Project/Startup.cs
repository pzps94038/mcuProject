using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Project.Data;
using Project.Models;

namespace Project
{
    public class Startup
    {
        //(local)\SQLEXPRESS 伺服器名稱
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();              
            services.AddDbContext<ApiOrderDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DbConnection")));
            services.AddTransient<IProductResposity, ProductResposity>();
            services.AddTransient<IOrderDetailResposity, OrderDetailResposity>();
            services.AddDbContext<ApiIdentityDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("UserDbConnection")));
            services.AddTransient<IAspNetUserResposity, AspNetUserResposity>();
            //swagger套件
            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1",
                        new Microsoft.OpenApi.Models.OpenApiInfo
                        {
                            Title = "Swagger 整合 API網址",
                            Description = "API網址",
                            Version = "版本1"
                        }
                    );
            });
            services.AddControllersWithViews();
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();                    
            });
            app.UseSwagger();
            app.UseSwaggerUI(options => {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "Swagger Demo API");
            });
        }        
    }
}
