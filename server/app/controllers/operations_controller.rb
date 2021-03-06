class OperationsController < ApplicationController
  before_action :set_operation, only: [:show, :edit, :update, :destroy]
  skip_before_filter :verify_authenticity_token  

  # GET /operations
  # GET /operations.json
  def index
    @operations = Operation.all
  end

  # GET /operations/1
  # GET /operations/1.json
  def show
    @operation = Operation.find(params[:id])
    respond_to do |format|
    format.html
    format.json { render :json => @operation.to_json(:include => :task) }
  end
  end

  # GET /operations/new
  def new
    @operation = Operation.new
  end

  # GET /operations/1/edit
  def edit
  end

  # POST /operations
  # POST /operations.json
  def create
    @operation = Operation.new(operation_params)

    respond_to do |format|
      if @operation.save
        format.html { redirect_to @operation, notice: 'Operation was successfully created.' }
        format.json { render :show, status: :created, location: @operation }
      else
        format.html { render :new }
        format.json { render json: @operation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /operations/1
  # PATCH/PUT /operations/1.json
  def update
    respond_to do |format|
      if @operation.update(operation_params)
        format.html { redirect_to @operation, notice: 'Operation was successfully updated.' }
        format.json { render :json => @operation.to_json(:include => :task) }
      else
        format.html { render json: @operation.errors, status: :unprocessable_entity  }
        format.json { render json: @operation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /operations/1
  # DELETE /operations/1.json
  def destroy
    @operation.destroy
    respond_to do |format|
      format.html { redirect_to operations_url, notice: 'Operation was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # def send
  #   app = RailsPushNotifications::APNSApp.new
  #   app.apns_dev_cert = File.read('{Rails.root}/public/Certificate-iOS.pem')
  #   app.apns_prod_cert = File.read('{Rails.root}/public/Certificate-iOS.pem')
  #   app.sandbox_mode = true
  #   app.save

  #   app = <Your Apple app>
  #   notification = app.notifications.create(
  #     destinations: [
  #       'Your first destination token',
  #       'Your second destination token'
  #     ],
  #     data: { aps: { alert: 'Hello APNS World!', sound: 'true', badge: 1 } }
  #   )
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_operation
      @operation = Operation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def operation_params
      params.require(:operation).permit(:name, :current_task_id)
    end
end
