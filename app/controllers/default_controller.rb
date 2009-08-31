class DefaultController < ApplicationController
  def index
    redirect_to :action => 'unobtrusive'
  end
  
  def unobtrusive
    render
  end
end